const NavigationMenu = ({ setView }) => (
    <nav className="grid grid-cols-3 gap-4 mb-6">
        <button onClick={() => setView('lessonList')} className="flex items-center justify-center bg-primary text-white py-2 px-4 rounded-lg shadow hover:bg-primary-700">
            Danh Sách
        </button>
        <button onClick={() => setView('createLesson')} className="flex items-center justify-center bg-primary text-white py-2 px-4 rounded-lg shadow hover:bg-primary-700">
            Tạo Bài Học
        </button>
        <button onClick={() => setView('review')} className="flex items-center justify-center bg-primary text-white py-2 px-4 rounded-lg shadow hover:bg-primary-700">
            Ôn Tập
        </button>
    </nav>
);

export default NavigationMenu;
