
import { useEffect, useState } from 'react';

interface CodeSnippetProps {
  code: string;
  className?: string;
}

const CodeSnippet = ({ code, className = '' }: CodeSnippetProps) => {
  const [displayCode, setDisplayCode] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const typingSpeed = 30; // ms per character
  
  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayCode(code.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [code, currentIndex]);
  
  // Apply syntax highlighting
  const formatCode = (codeString: string) => {
    // Simple Python syntax highlighting for the example
    // In a real application, consider using a library like Prism.js or highlight.js
    return codeString
      .replace(
        /(["'])(?:(?=(\\?))\2.)*?\1/g, 
        '<span class="syntax-string">$&</span>'
      )
      .replace(
        /(def|class|import|from|if|else|elif|for|while|return|True|False|None)/g, 
        '<span class="syntax-keyword">$1</span>'
      )
      .replace(
        /([A-Za-z_][A-Za-z0-9_]*(?=\())/g, 
        '<span class="syntax-function">$1</span>'
      )
      .replace(
        /(#.*$)/gm, 
        '<span class="syntax-comment">$1</span>'
      );
  };
  
  return (
    <pre className={`font-mono bg-card p-4 rounded-lg text-sm md:text-base overflow-x-auto ${className}`}>
      <code dangerouslySetInnerHTML={{ __html: formatCode(displayCode) }} />
      <span className="inline-block w-2 h-5 bg-primary animate-pulse ml-0.5" />
    </pre>
  );
};

export default CodeSnippet;
