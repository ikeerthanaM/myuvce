interface Pill {
  label: string;
  url?: string;
}

interface EmbedBoxProps {
  title: string;
  pills?: Pill[];
}

export default function EmbedBox({ title, pills = [] }: EmbedBoxProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 my-4 bg-gray-50 dark:bg-gray-900 shadow-sm">
      <h4 className="font-semibold text-base mb-3 text-gray-900 dark:text-gray-100">{title}</h4>
      
      <div className="flex flex-wrap gap-2">
        {pills.map((pill, index) => {
          const baseStyles = "inline-flex items-center text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-md transition-colors";
          
          if (pill.url) {
            return (
              <a 
                key={index}
                href={pill.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseStyles} hover:bg-gray-300 dark:hover:bg-gray-700 underline`}
              >
                {pill.label}
              </a>
            );
          }
          
          return (
            <span key={index} className={baseStyles}>
              {pill.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
