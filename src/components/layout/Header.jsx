import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search as SearchIcon, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { syllabus } from '../../data/syllabus';
import './Header.css';

const Header = ({ toggleSidebar }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Flatten syllabus for search
    const allLessons = React.useMemo(() => {
        return syllabus.flatMap(chapter =>
            chapter.lessons.map(lesson => ({
                ...lesson,
                chapterTitle: chapter.title
            }))
        );
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
            if (e.key === 'Escape') {
                inputRef.current?.blur();
                setIsFocused(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = allLessons.filter(lesson =>
            lesson.title.toLowerCase().includes(lowerQuery) ||
            lesson.chapterTitle.toLowerCase().includes(lowerQuery)
        );
        setResults(filtered);
    }, [query, allLessons]);

    const handleResultClick = (path) => {
        navigate(path);
        setQuery('');
        setResults([]);
        setIsFocused(false);
        inputRef.current?.blur();
    };

    return (
        <header className="header">
            <div className="header-left">
                <button className="menu-btn" onClick={toggleSidebar} aria-label="Menu">
                    <Menu size={24} />
                </button>
                <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <span className="swift-logo">Swift</span>
                    <span className="ui-logo">UI</span>
                    <span className="tutorial-badge">Tutoriels</span>
                </div>
            </div>

            <div className="header-center">
                <div className={`search-bar-container ${isFocused ? 'focused' : ''}`}>
                    <SearchIcon size={18} className="search-icon" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Rechercher des sujets, vues, modificateurs..."
                        className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    />
                    {query ? (
                        <button className="clear-btn" onClick={() => setQuery('')}>
                            <X size={14} />
                        </button>
                    ) : (
                        <span className="search-shortcut">⌘K</span>
                    )}

                    {isFocused && (query || results.length > 0) && (
                        <div className="search-dropdown">
                            {results.length > 0 ? (
                                results.map(result => (
                                    <div
                                        key={result.id}
                                        className="search-result-item"
                                        onMouseDown={() => handleResultClick(result.path)}
                                    >
                                        <div className="result-icon">
                                            <ChevronRight size={14} />
                                        </div>
                                        <div className="result-info">
                                            <span className="result-title">{result.title}</span>
                                            <span className="result-chapter">{result.chapterTitle}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                query && <div className="no-results">Aucun résultat trouvé pour "{query}"</div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="header-right">
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
