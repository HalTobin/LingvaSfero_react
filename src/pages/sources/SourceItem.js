import './SourceItem.css';

function SourceItem({ source }) {
    return (
        <div className="source-card">
            <div className="thumbnail-container">
                {source.thumbnail && <img src={source.thumbnail} alt="Thumbnail" className="thumbnail" />}
            </div>
            <div className="info-container">
                <h3 className="title">{source.name}</h3>
                <p className="description">{source.description}</p>
            </div>
        </div>
    );
}

export default SourceItem;