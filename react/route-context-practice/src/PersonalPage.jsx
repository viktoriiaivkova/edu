import "./PersonalPage.css";
function PersonalPage(props) {
    return(
        <div className="personal-container">{props.value ==null ? "You haven't entered any text yet" : props.value }</div>
    )
}

export default PersonalPage;