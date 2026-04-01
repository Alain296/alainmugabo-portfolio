export interface BlogPost {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    shortDescription: "A beginner-friendly guide to building modern web applications with React.js and its ecosystem.",
    content: `React has become one of the most popular JavaScript libraries for building user interfaces. In this post, I'll share my experience learning React and tips for beginners.

## Why React?

React's component-based architecture makes it easy to build reusable UI components. With hooks like useState and useEffect, managing state and side effects is intuitive.

## Key Concepts

1. **Components**: Build small, reusable pieces of UI
2. **JSX**: Write HTML-like syntax in JavaScript
3. **State Management**: Use useState for local state, Context for global state
4. **Effects**: Handle side effects with useEffect

## My Experience

As a software engineering student, React helped me build projects like the Village Water System with a modern, responsive frontend. The ecosystem of tools like React Router, TanStack Query, and Tailwind CSS makes development fast and enjoyable.

## Tips for Beginners

- Start with the official React docs
- Build small projects first
- Learn TypeScript early — it saves debugging time
- Use Tailwind CSS for rapid styling`,
    category: "Web Development",
    date: "2025-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: "plsql-database-design",
    title: "Mastering PL/SQL for Real-World Applications",
    shortDescription: "Lessons learned from building a Coffee Roastery Management System using Oracle PL/SQL.",
    content: `PL/SQL is a powerful procedural language for Oracle databases. Here's what I learned building the Coffee Roastery Management System.

## The Project

Our capstone project required building a comprehensive database solution for a specialty coffee producer. The system handles order tracking, inventory management, and quality control.

## Key PL/SQL Features Used

- **Stored Procedures**: Automated order fulfillment workflows
- **Triggers**: Real-time inventory synchronization
- **Materialized Views**: Performance optimization for analytics
- **Exception Handling**: Robust error management

## Best Practices

1. Always use parameterized queries to prevent SQL injection
2. Implement proper transaction management with COMMIT and ROLLBACK
3. Use packages to organize related procedures and functions
4. Write meaningful comments and documentation

## Conclusion

PL/SQL remains essential for enterprise database development. Understanding it deeply gives you an edge in building robust backend systems.`,
    category: "Database",
    date: "2025-02-20",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
  },
  {
    id: "ai-creative-design",
    title: "How AI is Transforming Creative Design",
    shortDescription: "Exploring how tools like Midjourney and DALL-E are revolutionizing the creative design process.",
    content: `AI-powered design tools have changed how we create visual content. Here's my perspective as a creative designer using these tools.

## The AI Design Revolution

Tools like Midjourney, DALL-E, and Adobe Firefly allow designers to generate stunning visuals from text prompts. This doesn't replace creativity — it amplifies it.

## My Workflow

1. **Conceptualize**: Define the design direction and mood
2. **Generate**: Use AI tools to create initial concepts
3. **Refine**: Edit in Photoshop or Illustrator for precision
4. **Deliver**: Final polishing and format optimization

## AI Tools I Use

- **Midjourney**: For artistic and conceptual imagery
- **ChatGPT**: For copywriting and brainstorming
- **Adobe Firefly**: For seamless integration with Creative Suite

## The Future

AI will continue to evolve, but the human creative vision remains irreplaceable. The best results come from combining AI capabilities with design expertise.`,
    category: "AI & Design",
    date: "2025-01-10",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "java-spring-boot-guide",
    title: "Building REST APIs with Java Spring Boot",
    shortDescription: "A practical guide to creating robust backend services using Java and Spring Boot framework.",
    content: `Spring Boot simplifies Java backend development. Here's how I used it for the Gym Management System.

## Why Spring Boot?

- Auto-configuration reduces boilerplate
- Embedded server means easy deployment
- Rich ecosystem with Spring Security, Spring Data JPA
- Excellent documentation and community

## Project Structure

A typical Spring Boot project includes:
- **Controllers**: Handle HTTP requests
- **Services**: Business logic layer
- **Repositories**: Database access layer
- **Models/Entities**: Data representations

## Key Features Implemented

1. RESTful API endpoints for CRUD operations
2. JWT-based authentication
3. Input validation with Bean Validation
4. Error handling with @ControllerAdvice

## Lessons Learned

Spring Boot's convention-over-configuration approach saves time, but understanding the underlying Spring framework helps when debugging complex issues.`,
    category: "Web Development",
    date: "2024-12-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: "machine-learning-python",
    title: "Introduction to Machine Learning with Python",
    shortDescription: "My journey into data science and building predictive models using Python and Scikit-learn.",
    content: `Machine learning opens up incredible possibilities for data-driven decisions. Here's what I've learned.

## Getting Started

Python's ecosystem makes ML accessible:
- **NumPy & Pandas**: Data manipulation
- **Scikit-learn**: ML algorithms
- **Matplotlib & Seaborn**: Visualization

## My Real Estate Analysis Project

I built a property value prediction model using:
1. Data collection and cleaning with Pandas
2. Feature engineering and selection
3. Model training with Random Forest and Linear Regression
4. Evaluation using RMSE and R² metrics

## Key Takeaways

- Data quality matters more than algorithm choice
- Feature engineering is where domain knowledge shines
- Always split data into train/test sets
- Visualize results to communicate findings effectively

## What's Next

I'm exploring deep learning with TensorFlow and natural language processing for more advanced AI applications.`,
    category: "AI & Design",
    date: "2024-11-18",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
];
