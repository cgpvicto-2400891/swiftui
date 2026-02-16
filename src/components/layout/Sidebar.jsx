import React from 'react';
import { NavLink } from 'react-router-dom';
import { syllabus } from '../../data/syllabus';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-content">
                {syllabus.map((chapter) => (
                    <div key={chapter.id} className="chapter">
                        <h3 className="chapter-title">{chapter.title}</h3>
                        <div className="chapter-lessons">
                            {chapter.lessons.map((lesson) => (
                                <NavLink
                                    key={lesson.id}
                                    to={lesson.path}
                                    className={({ isActive }) => `lesson-link ${isActive ? 'active' : ''}`}
                                    onClick={onClose} // Close sidebar on mobile when link is clicked
                                >
                                    {lesson.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
