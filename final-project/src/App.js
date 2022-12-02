import './App.css';
import {Card, Form} from "react-bootstrap";
import {useState} from "react";

function App() {
    const [text, setText] = useState('Puedes editar este texto dando click en el!')
    return (
        <div className="App bg">
            <Card className=" App-header">
                <Card.ImgOverlay>
                    <Card.Title>Santiago Hernández Guerrero</Card.Title>
                    <Form >
                    <span data-cy="textarea">
                        <Form.Control
                            required
                            onChange={e => setText(e.target.value)}
                            style={{fontSize: "50px",
                                    width: "60vw",
                                    marginTop: "30px"
                            }}
                            defaultValue={text}/>
                    </span>
                    </Form>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default App;