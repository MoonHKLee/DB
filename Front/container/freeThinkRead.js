import React from 'react';
import {Col,Row} from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentModal from "../components/comment";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '100%',
        height:'80%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const FreeThinkRead = ({think}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const img = <img src="/static/images/image1.jpg"/>;

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card} style={{maxWidth:'100%',height:'auto'}}>
            <Row>
                <Col span={12}>
                    {document.getElementsByClassName('img').naturalHeight>document.getElementsByClassName('box').naturalHeight
                        ?
                        <div className='box' style={{margin:'5px', width:'100%', float:"left", height:'90vh', background:'#F2F2F2', textAlign:'center'}}>
                            <img className='img' src={`/static/images/image1.jpg`} style={{
                                width: 'auto',
                                height: '100%',
                            }}/>
                        </div>
                        :
                        <div className='box' style={{ height:"90vh", width:'100%', background:'#000000', display:'table'}}>
                        <div style={{ display:'table-cell', width:'100%', verticalAlign:'middle'}}>
                        <img className='img' src={`/static/images/image1.jpg`}
                        style={{
                        width: '100%',
                        height: 'auto',
                        margin:'0 auto'
                    }}
                        />
                        </div>
                        </div>
                    }
                </Col>
                <Col span={12}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={think.title}
                        subheader={think.createAt}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {think.contents}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>{think.good}
                        </IconButton>
                        <IconButton aria-label="share">
                            <CheckIcon/>{think.hits}
                        </IconButton>
                        <IconButton aria-label="comment">
                            <ChatBubbleOutlineIcon/>{think.replies.length}
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <CommentModal replies={think.replies}/>
                        </CardContent>
                    </Collapse>
                </Col>
            </Row>
        </Card>
    );
};
export default FreeThinkRead;