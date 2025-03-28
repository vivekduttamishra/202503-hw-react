import withConditionalVisibility from "../hoc/withConditionalVisibility"


const Tags = ({tags}) => {

    return (
        <p>
            <strong>Tags:</strong>{" "}
            {tags.map((tag, index) => (
                <span key={index} className="badge bg-primary me-1">
                    {tag}
                </span>
            ))}
        </p>
    )
}

export default withConditionalVisibility(Tags)