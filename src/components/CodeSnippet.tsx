
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
    return codeString
      .replace(
        /(["'])(?:(?=(\\?))\2.)*?\1/g, 
        '<span class="text-green-400">$&</span>'
      )
      .replace(
        /(def|class|import|from|if|else|elif|for|while|return|True|False|None)/g, 
        '<span class="text-purple-400 font-medium">$1</span>'
      )
      .replace(
        /([A-Za-z_][A-Za-z0-9_]*(?=\())/g, 
        '<span class="text-blue-400">$1</span>'
      )
      .replace(
        /(#.*$)/gm, 
        '<span class="text-gray-400 italic">$1</span>'
      );
  };
  
  return (
    <div className={`w-full max-w-full overflow-hidden ${className}`}>
      <pre className="font-mono bg-gray-900 p-3 sm:p-4 md:p-6 rounded-lg text-xs sm:text-sm md:text-base overflow-x-auto whitespace-pre-wrap break-words border border-gray-700">
        <code 
          className="block text-white leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatCode(displayCode) }} 
        />
        <span className="inline-block w-2 h-4 sm:h-5 bg-blue-500 animate-pulse ml-0.5" />
      </pre>
    </div>
  );
};

export default CodeSnippet;
