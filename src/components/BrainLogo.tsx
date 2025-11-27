const BrainLogo = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path 
          d="M30 5C16.7 5 6 15.7 6 29c0 6.6 2.7 12.6 7 16.9.3.3.7.1.7-.3v-3.8c0-.3-.2-.5-.5-.6-3.4-1.2-5.9-4.5-5.9-8.3 0-4.9 4-8.9 8.9-8.9.8 0 1.5.1 2.2.3.3.1.6-.1.7-.4.7-2.1 2-3.9 3.7-5.1.2-.2.3-.5.2-.8-.6-1.4-.9-2.9-.9-4.5 0-6.1 5-11.1 11.1-11.1s11.1 5 11.1 11.1c0 1.6-.3 3.1-.9 4.5-.1.3 0 .6.2.8 1.7 1.2 3 3 3.7 5.1.1.3.4.5.7.4.7-.2 1.4-.3 2.2-.3 4.9 0 8.9 4 8.9 8.9 0 3.8-2.5 7.1-5.9 8.3-.3.1-.5.3-.5.6v3.8c0 .4.4.6.7.3 4.3-4.3 7-10.3 7-16.9C54 15.7 43.3 5 30 5z" 
          fill="currentColor"
        />
        <circle cx="22" cy="20" r="2" fill="currentColor"/>
        <circle cx="38" cy="20" r="2" fill="currentColor"/>
        <path 
          d="M25 28c0-2.8 2.2-5 5-5s5 2.2 5 5" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M20 32c1.1 0 2-.9 2-2s-.9-2-2-2" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        <path 
          d="M40 32c-1.1 0-2-.9-2-2s.9-2 2-2" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
      </svg>
      <h1 className="text-2xl font-bold text-primary">NeuroNet</h1>
    </div>
  );
};

export default BrainLogo;
