import json
import re

# Read the questions.ts file
with open('../src/data/questions.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the questions array using regex
# Find the array between 'export const questions: Question[] = [' and '];'
match = re.search(r'export const questions: Question\[\] = \[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find questions array")
    exit(1)

array_content = match.group(1)

# Parse the TypeScript objects manually
# This is a simplified parser for the specific format
questions = []
current_question = {}
in_question = False
current_field = None
field_value = ""
brace_count = 0

lines = array_content.split('\n')
for line in lines:
    stripped = line.strip()
    
    if stripped == '{':
        in_question = True
        current_question = {}
        brace_count += 1
    elif stripped == '},' or (stripped == '}' and in_question):
        if brace_count == 1:
            questions.append(current_question.copy())
            in_question = False
            current_question = {}
        brace_count -= 1
    elif in_question and ':' in stripped:
        # Parse field
        parts = stripped.split(':', 1)
        field_name = parts[0].strip()
        field_content = parts[1].strip()
        
        # Remove trailing comma
        if field_content.endswith(','):
            field_content = field_content[:-1]
        
        # Remove quotes from string values
        if field_content.startswith("'") and field_content.endswith("'"):
            field_content = field_content[1:-1]
        elif field_content.startswith('"') and field_content.endswith('"'):
            field_content = field_content[1:-1]
        
        # Handle arrays
        if field_content.startswith('[') and field_content.endswith(']'):
            # Parse array
            array_str = field_content[1:-1]
            array_items = []
            for item in array_str.split(','):
                item = item.strip()
                if item.startswith("'") and item.endswith("'"):
                    item = item[1:-1]
                elif item.startswith('"') and item.endswith('"'):
                    item = item[1:-1]
                array_items.append(item)
            field_content = array_items
        
        current_question[field_name] = field_content

# Separate questions by type
short_questions = [q for q in questions if q.get('type') == 'short']
fill_questions = [q for q in questions if q.get('type') == 'fill']

print(f"Total questions: {len(questions)}")
print(f"Short questions: {len(short_questions)}")
print(f"Fill questions: {len(fill_questions)}")

# Helper function to format a question as TypeScript
def format_question(q):
    lines = []
    lines.append('  {')
    lines.append(f"    topic: '{q.get('topic', '')}',")
    lines.append(f"    question: '{q.get('question', '')}',")
    lines.append(f"    type: '{q.get('type', '')}',")
    lines.append(f"    answer: '{q.get('answer', '')}',")
    
    acceptable = q.get('acceptableAnswers', [])
    if isinstance(acceptable, list):
        formatted_acceptable = ', '.join([f"'{a}'" for a in acceptable])
        lines.append(f"    acceptableAnswers: [{formatted_acceptable}],")
    
    lines.append(f"    hint: '{q.get('hint', '')}',")
    lines.append('  }')
    return '\n'.join(lines)

# Write short questions file
short_content = """import { Question } from '../types/Question';

export const shortQuestions: Question[] = [
"""

for i, q in enumerate(short_questions):
    short_content += format_question(q)
    if i < len(short_questions) - 1:
        short_content += ','
    short_content += '\n'

short_content += '];\n'

with open('../src/data/shortQuestions.ts', 'w', encoding='utf-8') as f:
    f.write(short_content)

# Write fill questions file
fill_content = """import { Question } from '../types/Question';

export const fillQuestions: Question[] = [
"""

for i, q in enumerate(fill_questions):
    fill_content += format_question(q)
    if i < len(fill_questions) - 1:
        fill_content += ','
    fill_content += '\n'

fill_content += '];\n'

with open('../src/data/fillQuestions.ts', 'w', encoding='utf-8') as f:
    f.write(fill_content)

print("\nFiles created successfully!")
print("- shortQuestions.ts")
print("- fillQuestions.ts")
