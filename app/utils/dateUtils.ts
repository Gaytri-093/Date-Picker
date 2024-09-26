// utils/dateUtils.ts
export const calculateRecurrences = (startDate: Date | null, endDate: Date | null, { pattern, interval }: { pattern: string; interval: number }) => {
    const dates: Date[] = [];
    if (!startDate) return dates;
  
    let currentDate = new Date(startDate);
    while (!endDate || currentDate <= endDate) {
      dates.push(new Date(currentDate));
  
      switch (pattern) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + interval);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + interval * 7);
          break;
        case 'monthly':
          currentDate.setMonth(currentDate.getMonth() + interval);
          break;
        case 'yearly':
          currentDate.setFullYear(currentDate.getFullYear() + interval);
          break;
        default:
          break;
      }
    }
    return dates;
  };
  