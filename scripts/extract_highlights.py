"""
PDF Text Extractor for ID2322 Exam Prep
Extracts all text from PDFs including blue/colored text and generates quiz questions
"""

import fitz  # PyMuPDF
import os
import json
import re

def extract_text_with_formatting(pdf_path):
    """Extract all text from PDF, identifying blue/colored text"""
    extracted_data = []
    
    try:
        doc = fitz.open(pdf_path)
        filename = os.path.basename(pdf_path)
        
        for page_num, page in enumerate(doc, 1):
            # Get text with formatting information
            blocks = page.get_text("dict")["blocks"]
            
            for block in blocks:
                if "lines" in block:
                    for line in block["lines"]:
                        for span in line["spans"]:
                            text = span["text"].strip()
                            color = span.get("color", 0)
                            
                            # Check if text is colored (not black)
                            # Black is typically 0, colored text will have different values
                            is_colored = color != 0
                            
                            # Also check font properties for bold/emphasis
                            font = span.get("font", "").lower()
                            is_bold = "bold" in font
                            
                            if text and (is_colored or is_bold):
                                extracted_data.append({
                                    'file': filename,
                                    'page': page_num,
                                    'text': text,
                                    'is_colored': is_colored,
                                    'is_bold': is_bold,
                                    'color': color
                                })
        
        doc.close()
        
    except Exception as e:
        print(f"Error processing {pdf_path}: {str(e)}")
    
    return extracted_data

def extract_all_text(pdf_path):
    """Extract complete text from PDF"""
    text = ""
    
    try:
        doc = fitz.open(pdf_path)
        for page in doc:
            text += page.get_text()
        doc.close()
    except Exception as e:
        print(f"Error extracting text from {pdf_path}: {str(e)}")
    
    return text

def identify_key_phrases(text):
    """Identify important phrases and definitions from text"""
    key_phrases = []
    
    # Pattern 1: "X is Y" definitions
    definitions = re.findall(r'([A-Z][^.!?]*?\s+(?:is|are|means|refers to)\s+[^.!?]+[.!?])', text)
    key_phrases.extend(definitions)
    
    # Pattern 2: Sentences with important keywords
    keywords = ['temperature', 'process', 'material', 'property', 'method', 'technique', 
                'strength', 'melting', 'consists of', 'composed of', 'used for', 'used to',
                'classified as', 'divided into', 'types of', 'categories', 'main', 'primary']
    
    sentences = re.split(r'[.!?]+', text)
    for sentence in sentences:
        sentence = sentence.strip()
        if any(keyword in sentence.lower() for keyword in keywords):
            if len(sentence) > 20 and len(sentence) < 200:  # Filter by length
                key_phrases.append(sentence)
    
    return key_phrases

def main():
    pdf_dir = "pdfs"
    all_colored_text = []
    all_text_by_file = {}
    
    # Process all PDFs in the directory
    for filename in sorted(os.listdir(pdf_dir)):
        if filename.endswith('.pdf'):
            pdf_path = os.path.join(pdf_dir, filename)
            print(f"Processing {filename}...")
            
            # Extract colored/bold text
            colored_text = extract_text_with_formatting(pdf_path)
            all_colored_text.extend(colored_text)
            print(f"  Found {len(colored_text)} colored/bold text segments")
            
            # Extract all text
            full_text = extract_all_text(pdf_path)
            all_text_by_file[filename] = full_text
            
            # Find key phrases
            key_phrases = identify_key_phrases(full_text)
            print(f"  Identified {len(key_phrases)} potential key phrases")
    
    # Save colored/bold text
    with open("colored_text.json", 'w', encoding='utf-8') as f:
        json.dump(all_colored_text, f, indent=2, ensure_ascii=False)
    
    # Save full text by file
    with open("full_text.json", 'w', encoding='utf-8') as f:
        json.dump(all_text_by_file, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Total colored/bold segments: {len(all_colored_text)}")
    print(f"✓ Saved colored text to colored_text.json")
    print(f"✓ Saved full text to full_text.json")
    
    # Print samples
    if all_colored_text:
        print("\n--- Sample Colored/Bold Text ---")
        for item in all_colored_text[:10]:
            print(f"\n{item['file']} (Page {item['page']}):")
            print(f"  {item['text'][:100]}")
            print(f"  Colored: {item['is_colored']}, Bold: {item['is_bold']}")

if __name__ == "__main__":
    main()
