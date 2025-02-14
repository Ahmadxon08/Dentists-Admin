import { motion } from "framer-motion";
import { MdSearchOff } from "react-icons/md";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-10"
    >
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full shadow-lg">
        <MdSearchOff size={72} className="text-gray-500 dark:text-gray-400" />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Hech narsa topilmadi!
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-center px-4">
        Boshqa so&#39;z bilan qidirib ko&#39;ring yoki qidirishni tekshiring.
      </p>
    </motion.div>
  );
};

export default NotFound;
