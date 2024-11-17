import * as React from "react";
import {Box, Button, createTheme, Grid, TextField, ThemeProvider,} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {Message} from "./Message";
import {LoadingDotsMessage} from "./LoadingDotsMessage"
import {useEffect, useRef, useState} from "react";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#DC8037',
        },
        secondary: {
            main: '#374C53',
        },
    },
});

const messages = [
    {id: 1, text: "Hi! How can I assist you today?", sender: "bot"},
];

function MessageType(id, text, sender) {
    this.id = id;
    this.text = text;
    this.sender = sender
}


function RequestMessageType(request) {
    this.request = request
}

const url = process.env.REACT_APP_API_URL;

export const ChatComponent = (props) => {
    const [input, setInput] = React.useState("");
    const [allMessages, setMessages] = React.useState(messages)
    const [id, setID] = React.useState(1)
    const [isLoading, setIsLoading] = React.useState(false);
    const [history, setHistory] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [allMessages.length]);

    useEffect(() => {
        if(!isLoading){
            document.querySelector("#inputField").focus()
        }
    }, [isLoading])

    useEffect(() => {
        console.log("TU SOOOOM")
        if (props.filterRequest) {
            let tempMesseges = allMessages;
            let idNewTWO =  id + 1
            setID(idNewTWO)
            tempMesseges.push(new MessageType(idNewTWO, props.response.content, "bot"));
            setMessages(tempMesseges)
        }
        props.setFilterRequest(false)
    }, [props.filterRequest]);
    const handleSend = () => {
        props.setLoaded(false)
        if (input.trim() !== "") {
            setInput("");
            let tempMesseges = allMessages;
            setID(id + 1)
            let idNew = id + 1
            tempMesseges.push(new MessageType(idNew, input.trim(), "U"));
            let tempHistory = history
            setMessages(tempMesseges)
            setIsLoading(true)
            let previousComponent=null
            let previousAttributes=[]
            if (props.response){
                previousComponent= props.response.component
                previousAttributes=props.response.attributes? props.response.attributes:[]
            }

            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({request: input.trim(), previousComponent:previousComponent, previousAttributes:previousAttributes, history:history})
            };
            fetch(`${url}/gpt/request/new`, requestOptions)
                .then(async (response) => {
                    const res = await response.json();
                    let tempMesseges = allMessages;
                    let idNewTWO = idNew + 1
                    setID(idNewTWO)
                    tempMesseges.push(new MessageType(idNewTWO, res.content, "bot"));
                    if (res.attributes != null) {
                        res.attributes.forEach(att=>att.checked=true)
                        props.setLoaded(true)
                        props.setResponse(res)
                    }
                    props.setResponse(res)
                    setMessages(tempMesseges)
                    tempHistory.push(input.trim())
                    setHistory(tempHistory)
                    setIsLoading(false)

                }).catch(function (error) {
                console.log("ERROR")
                console.log(error);
                setIsLoading(false)
            });
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend()

        }
    };
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };


    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: "74vh",
                    display: "flex",
                    width: "100%",
                    borderRadius: "5px 5px 5px 5px",
                    flexDirection: "column",
                    bgcolor: "grey.200",
                }}
            >
                <Box sx={{flexGrow: 1, overflow: "auto", p: 2}}>
                    {allMessages.map((message, index) => (
                        <Message key={message.id} message={message}/>
                    ))}
                    {isLoading ? <LoadingDotsMessage></LoadingDotsMessage> : <></>}
                    <div ref={messagesEndRef}></div>

                </Box>
                <Box sx={{p: 2, backgroundColor: "background.default", borderRadius: "0px 0px 5px 5px",}}>
                    <Grid container spacing={2} alignItems="flex-start">
                        <Grid item xs={10}>
                            <TextField
                                size="small"
                                fullWidth
                                onKeyPress={handleKeyPress}
                                placeholder="Type a message"
                                variant="outlined"
                                borderColor="primary"
                                value={input}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                id="inputField"
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                fullWidth
                                color="secondary"
                                variant="contained"
                                endIcon={<SendIcon/>}
                                onClick={handleSend}
                            >
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    );
};