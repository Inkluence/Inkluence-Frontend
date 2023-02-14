import { Card } from 'react-bootstrap';
import CreatorsGridCard from "./CreatorsGridCard";

const Creators = () => {
    return (
         <div>
                        <Card className="bg-transparent shadow-none">
                            <Card.Body className="px-0 py-0">
                                <CreatorsGridCard />
                            </Card.Body>
                        </Card>

              </div>
    );
};

export default Creators;
