# ID2322 Exam Prep App

A comprehensive study and exam revision application for the ID2322 Materials & Production course.

## 📁 Project Structure

```
ID2322/
├── src/                        # Source code
│   ├── components/            # React components
│   │   └── ExamPrepApp.tsx   # Main quiz component
│   ├── data/                 # Data files
│   │   └── questions.ts      # Quiz questions database
│   ├── types/                # TypeScript type definitions
│   │   └── Question.ts       # Question interfaces
│   ├── utils/                # Utility functions
│   │   └── answerChecker.ts  # Answer validation logic
│   ├── App.tsx               # Root app component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
│
├── data/                      # Data storage
│   ├── raw/                  # Raw extracted data from PDFs
│   │   ├── full_text.json    # Complete text extraction
│   │   ├── colored_text.json # Colored/highlighted text
│   │   └── extracted_highlights.json
│   └── processed/            # Processed/cleaned data
│
├── scripts/                   # Build and utility scripts
│   └── extract_highlights.py # PDF text extraction script
│
├── pdfs/                      # Course material PDFs
│
├── public/                    # Static assets
│   └── index.html
│
└── config files              # Configuration
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Python 3.x (for PDF extraction scripts)

### Installation

1. Install dependencies:
```bash
npm install
```

2. For PDF extraction (optional):
```bash
pip install -r requirements.txt
```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production build:
```bash
npm run build
```

## 📚 Features

- **Topic-based Filtering**: Study specific topics or all topics at once
- **Fill-in-the-blank Questions**: Test recall with gap-fill exercises
- **Short Answer Questions**: Practice conceptual understanding
- **Real-time Feedback**: Immediate answer validation
- **Progress Tracking**: Monitor your score and completion rate
- **Hint System**: Get contextual hints when stuck
- **Responsive Design**: Works on desktop and mobile devices

## 🔧 Adding New Questions

Questions are stored in `src/data/questions.ts`. To add new questions:

```typescript
{
  topic: 'Topic Name',
  question: 'Your question with ___ for blanks?',
  type: 'fill', // or 'short'
  answer: ['answer1', 'answer2'], // or 'single answer'
  acceptableAnswers: ['variations'], // optional
  hint: 'Helpful hint for students'
}
```

## 📊 PDF Extraction

The `scripts/extract_highlights.py` script extracts text from course PDFs:

```bash
python scripts/extract_highlights.py
```

Output files are saved to `data/raw/`.

## 🎨 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **PDF Processing**: PyMuPDF (fitz)

## 📝 Future Enhancements

- [ ] Multiple choice questions
- [ ] Spaced repetition algorithm
- [ ] Study session analytics
- [ ] Export/import question sets
- [ ] Collaborative study modes
- [ ] Mobile app version
- [ ] Backend API for question management
- [ ] User authentication and progress sync

## 📄 License

This project is for educational purposes.
