# Leadership Style Assessment

A modern, interactive leadership assessment tool built with React, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Assessment header with title and description
│   ├── QuestionCard.tsx # Individual question display with options
│   ├── ResultsPage.tsx  # Complete results display with insights
│   ├── DesktopSidebar.tsx # Real-time insights for desktop
│   └── MobileInsights.tsx # Mobile-optimized insights
├── data/                # Static data and configurations
│   ├── questions.ts     # Assessment questions and scoring
│   ├── leadershipStyles.ts # Leadership style definitions
│   └── developmentRoadmap.ts # Development recommendations
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces and types
└── App.tsx             # Main application component
```

## 🎯 Features

### Core Functionality
- **Interactive Assessment**: 20 carefully crafted questions across multiple leadership dimensions
- **Real-time Scoring**: Live calculation and display of leadership style tendencies
- **Progress Persistence**: Automatic saving of user progress using localStorage
- **Responsive Design**: Optimized for both desktop and mobile devices

### Leadership Styles
The assessment evaluates 8 distinct leadership styles:

1. **Bureaucratic Leader** - Structure and procedure-focused
2. **Authoritative Leader** - Power and authority-driven
3. **Innovative Leader** - Creativity and boundary-pushing
4. **Pacesetting Leader** - High standards and rapid progress
5. **Democratic Leader** - Collaboration and participation
6. **Affiliative Leader** - Relationship and belonging-focused
7. **Coaching Leader** - Development and empowerment
8. **Altruistic Leader** - Well-being and greater good

### Real-time Insights
- **Desktop Sidebar**: Comprehensive insights with radar charts and detailed scoring
- **Mobile Insights**: Compact, touch-friendly insights optimized for mobile
- **Dynamic Updates**: Real-time updates as users answer questions

### Results & Development
- **Comprehensive Results**: Primary and secondary style identification
- **Development Roadmap**: Actionable steps for leadership growth
- **Visual Analytics**: Radar charts and progress bars for easy understanding

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd leaders-journey

# Install dependencies
npm install

# Start the development server
npm start
```

### Building for Production
```bash
npm run build
```

## 🧩 Component Architecture

### Main Components

#### `App.tsx`
- **Purpose**: Main application orchestrator
- **Responsibilities**: 
  - State management for assessment flow
  - Progress persistence
  - Component coordination
  - Results calculation

#### `Header.tsx`
- **Purpose**: Assessment introduction and branding
- **Features**: Responsive design with gradient styling

#### `QuestionCard.tsx`
- **Purpose**: Individual question display and interaction
- **Features**:
  - Progress tracking
  - Question explanations
  - Answer options with hover effects
  - Navigation controls

#### `ResultsPage.tsx`
- **Purpose**: Complete results display
- **Features**:
  - Primary and secondary style identification
  - Characteristic breakdowns
  - Development roadmap
  - Reset functionality

#### `DesktopSidebar.tsx`
- **Purpose**: Real-time insights for desktop users
- **Features**:
  - Current style identification
  - Radar chart visualization
  - Detailed scoring breakdown
  - Motivational messaging

#### `MobileInsights.tsx`
- **Purpose**: Mobile-optimized insights
- **Features**:
  - Compact design for small screens
  - Touch-friendly interactions
  - Essential information only

### Data Structure

#### Questions (`data/questions.ts`)
```typescript
interface Question {
  id: number;
  category: string;
  text: string;
  explanation: string;
  options: {
    text: string;
    value: string;
    points: Record<string, number>;
  }[];
}
```

#### Leadership Styles (`data/leadershipStyles.ts`)
```typescript
interface LeadershipStyle {
  title: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  characteristics: string[];
}
```

#### Development Roadmap (`data/developmentRoadmap.ts`)
```typescript
interface DevelopmentStep {
  title: string;
  description: string;
  steps: string[];
}
```

## 🎨 Styling

The application uses **Tailwind CSS** for styling with:
- **Gradient Backgrounds**: Beautiful color transitions
- **Responsive Design**: Mobile-first approach
- **Interactive Elements**: Hover effects and transitions
- **Modern UI**: Rounded corners, shadows, and clean typography

## 📱 Responsive Design

- **Desktop**: Full sidebar with comprehensive insights
- **Tablet**: Optimized layout with reduced sidebar
- **Mobile**: Stacked layout with mobile-specific insights

## 🔧 Customization

### Adding New Questions
1. Add question to `data/questions.ts`
2. Ensure proper scoring points for all leadership styles
3. Include category and explanation

### Modifying Leadership Styles
1. Update `data/leadershipStyles.ts`
2. Add corresponding development steps in `data/developmentRoadmap.ts`
3. Update scoring logic if needed

### Styling Changes
- Modify Tailwind classes in component files
- Update color schemes in leadership style definitions
- Adjust responsive breakpoints as needed

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📦 Dependencies

- **React**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Lucide React**: Icons
- **PostCSS**: CSS processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues, please open an issue in the repository.
