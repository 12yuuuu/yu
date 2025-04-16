
import { useState, useEffect, useCallback, useRef } from "react";
import { PenLine } from "lucide-react";

interface DailyRecord {
  date: string;
  title: string;
  description: string;
}

interface DailyRecordsListProps {
  allRecords: DailyRecord[];
}

/**
 * Component that displays a list of daily record entries with infinite scroll
 */
export function DailyRecordsList({ allRecords }: DailyRecordsListProps) {
  const [displayedRecords, setDisplayedRecords] = useState<DailyRecord[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const recordsPerPage = 3;
  const loaderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize with first set of records
  useEffect(() => {
    setDisplayedRecords(allRecords.slice(0, recordsPerPage));
  }, [allRecords]);

  // Intersection observer for infinite scroll
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && !loading) {
      loadMoreRecords();
    }
  }, [loading, allRecords.length, page, recordsPerPage]);

  // Setup intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { 
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    });
    
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  // Load more records function
  const loadMoreRecords = useCallback(() => {
    if (page * recordsPerPage >= allRecords.length) return;
    
    setLoading(true);
    
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      const nextRecords = allRecords.slice(0, (page + 1) * recordsPerPage);
      setDisplayedRecords(nextRecords);
      setPage(page + 1);
      setLoading(false);
    }, 500);
  }, [page, allRecords, recordsPerPage]);

  return (
    <div className="max-w-xl mx-auto" ref={containerRef}>
      {displayedRecords.map((record, index) => (
        <DailyRecordEntry
          key={`record-${record.date}-${index}`}
          date={record.date}
          title={record.title}
          description={record.description}
          index={index}
        />
      ))}
      
      {/* Loading indicator */}
      <div 
        ref={loaderRef} 
        className={`flex justify-center items-center py-8 ${loading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      >
        {displayedRecords.length < allRecords.length && (
          <div className="animate-pulse flex space-x-2">
            <div className="h-2 w-2 bg-blue-400 dark:bg-blue-600 rounded-full"></div>
            <div className="h-2 w-2 bg-blue-400 dark:bg-blue-600 rounded-full"></div>
            <div className="h-2 w-2 bg-blue-400 dark:bg-blue-600 rounded-full"></div>
          </div>
        )}
      </div>
      
      {/* End of records message */}
      {displayedRecords.length === allRecords.length && displayedRecords.length > 0 && (
        <div className="text-center py-8 text-sm text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono animate-fade-in">
          You've reached the end of my daily records.
        </div>
      )}
    </div>
  );
}

interface DailyRecordEntryProps {
  date: string;
  title: string;
  description: string;
  index: number;
}

function DailyRecordEntry({ date, title, description, index }: DailyRecordEntryProps) {
  return (
    <div 
      className={`w-full overflow-hidden opacity-0 animate-fade-in mb-12 pb-8 hover:bg-blue-50/20 dark:hover:bg-blue-900/10 transition-colors duration-300 p-6 rounded-lg glass relative ${
        index % 2 === 0 ? 'ml-0 mr-0 md:ml-8' : 'ml-0 mr-0 md:mr-8'
      }`}
      style={{ 
        animationDelay: `${index * 150}ms`,
        backgroundImage: `
          linear-gradient(to bottom, rgba(245, 245, 220, 0.1), rgba(245, 245, 220, 0.05))
        `,
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      }}
    >
      <div className="flex flex-col space-y-3 text-center">
        <span className="text-sm text-blue-600 dark:text-blue-400 font-quantico self-start">
          {date}
        </span>
        <h3 className="text-xl font-semibold font-quantico text-[#1E3A8A] dark:text-[#A3BFFA] relative inline-block">
          {title}
          <span className="absolute left-0 right-0 bottom-[-5px] h-[1px] border-b border-dashed border-[#1E3A8A] dark:border-[#A3BFFA] opacity-50"></span>
        </h3>
        <p className="text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono max-w-xl mx-auto text-balance">
          {description}
        </p>
      </div>
      <div className="absolute bottom-4 right-4 animate-writing">
        <PenLine className="h-4 w-4 text-[#1E3A8A] dark:text-[#A3BFFA]" />
      </div>
    </div>
  );
}
