
import CreatorsList from "../../components/youtube/Creators";
const Creators = () => {
    return(
        <div id="creators" className="youtube-creators">
            <div className="text-white">
                <span className="title">CREATORS</span>
                <div className="content">
                    <CreatorsList/>
                </div>
            </div>
        </div>
    );
};
export default Creators;