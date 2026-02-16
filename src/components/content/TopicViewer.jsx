import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { syllabus } from '../../data/syllabus';
import { contentData } from '../../data/content';
import { Copy, Check } from 'lucide-react';
import './TopicViewer.css';

const CodeBlock = ({ code, title }) => {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="code-block-container">
            {title && <div className="code-title">{title}</div>}
            <div className="code-block">
                <pre><code>{code}</code></pre>
                <button className="copy-btn" onClick={copyToClipboard} aria-label="Copier le code">
                    {copied ? <Check size={16} color="#4ade80" /> : <Copy size={16} />}
                </button>
            </div>
        </div>
    );
};

const TopicViewer = () => {
    const { chapterId, lessonId } = useParams();

    // Find the lesson info
    const chapter = syllabus.find(c => c.id === chapterId);
    const lesson = chapter?.lessons.find(l => l.id === lessonId);

    // Get the content
    const content = contentData[lessonId];

    if (!lesson) {
        return <div className="not-found">Leçon non trouvée</div>;
    }

    return (
        <div className="topic-viewer">
            <div className="topic-header">
                <div className="breadcrumb">
                    {chapter.title} / {lesson.title}
                </div>
                <h1>{lesson.title}</h1>
            </div>

            <div className="topic-content">
                {content ? (
                    content.sections.map((section, index) => {
                        switch (section.type) {
                            case 'text':
                                return <p key={index} className="content-text">{section.content}</p>;
                            case 'heading':
                                return <h2 key={index} className="content-heading">{section.content}</h2>;
                            case 'code':
                                return <CodeBlock key={index} code={section.code} title={section.title} />;
                            case 'tip':
                                return (
                                    <div key={index} className="content-callout tip">
                                        <strong>Astuce :</strong> {section.content}
                                    </div>
                                );
                            case 'note':
                                return (
                                    <div key={index} className="content-callout note">
                                        <strong>Note :</strong> {section.content}
                                    </div>
                                );
                            case 'list':
                                return (
                                    <ul key={index} className="content-list">
                                        {section.items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                );
                            default:
                                return null;
                        }
                    })
                ) : (
                    <div className="empty-state">
                        <p>Le contenu de cette leçon est en cours de rédaction.</p>
                        <p>Revenez bientôt !</p>
                    </div>
                )}
            </div>

            <div className="topic-footer">
                {/* Navigation buttons could go here */}
            </div>
        </div>
    );
};

export default TopicViewer;
