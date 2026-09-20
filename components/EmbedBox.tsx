export default function EmbedBox({ title, description, url }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 my-4 bg-gray-50 dark:bg-gray-900 shadow-sm">
      <h4 className="font-semibold text-base mb-1 text-gray-900 dark:text-gray-100">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
      
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-md"
        >
          🔗 {url}
        </a>
      )}
    </div>
  );
}
