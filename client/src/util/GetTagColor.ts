export const getTagColor = (tag: string): string => {
    switch (tag) {
      case "Personal":
        return "bg-purple-500 text-white";
      case "Freelance":
        return "bg-yellow-500 text-white";
      case "Work":
        return "bg-blue-500 text-white";
      case "Other":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-300 text-white";
    }
  };