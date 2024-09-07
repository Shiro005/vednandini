import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';

const cardData = [
    {
        img: 'https://vednandini.com/wp-content/uploads/2018/09/act12.png',
        tag: 'Water Park',
        title: 'Rain Dance',
        description:
            'Enjoy a refreshing rain dance in our natural environment, set against a beautiful agricultural backdrop.',
        authors: [{ name: 'Vednandini Agri', avatar: '/static/images/avatar/1.jpg' }],
    },
    {
        img: 'https://vednandini.com/wp-content/uploads/2018/09/Aerial.jpg',
        tag: 'Water Park',
        title: 'Rock Fountain',
        description:
            'Experience the tranquility of our rock fountain while taking in the serene atmosphere of nature.',
        authors: [{ name: 'Vednandini Agri', avatar: '/static/images/avatar/2.jpg' }],
    },
    {
        img: 'https://vednandini.com/wp-content/uploads/2018/09/act11.png',
        tag: 'Adventure',
        title: 'Camel Riding',
        description:
            'Take a journey through our agricultural fields on a camel, a truly unique and traditional experience.',
        authors: [{ name: 'Vednandini Agri', avatar: '/static/images/avatar/3.jpg' }],
    },
    {
        img: 'https://vednandini.com/wp-content/uploads/2018/09/Main-.png',
        tag: 'Adventure',
        title: 'Tractor Safari',
        description:
            'Explore our vast farmlands with an adventurous tractor safari ride, perfect for families and nature lovers.',
        authors: [{ name: 'Vednandini Agri', avatar: '/static/images/avatar/4.jpg' }],
    },
    {
        img: 'https://vednandini.com/wp-content/uploads/2018/09/act7.png',
        tag: 'Water Park',
        title: 'Mud Bath',
        description:
            'Experience the ancient tradition of mud baths in our natural environment, known for its rejuvenating properties.',
        authors: [{ name: 'Vednandini Agri', avatar: '/static/images/avatar/5.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=6',
        tag: 'Adventure',
        title: 'Bullcart Riding',
        description:
            'Enjoy a peaceful and authentic bullcart ride, a traditional means of transport in Indian villages.',
        authors: [{ name: 'Vednandini Agri', avatar: '/static/images/avatar/6.jpg' }],
    },
];

const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

function Author({ authors }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
                <AvatarGroup max={3}>
                    {authors.map((author, index) => (
                        <Avatar
                            key={index}
                            alt={author.name}
                            src={author.avatar}
                            sx={{ width: 24, height: 24 }}
                        />
                    ))}
                </AvatarGroup>
                <Typography variant="caption">
                    {/* {authors.map((author) => author.name).join(', ')} */}
                </Typography>
            </Box>
            {/* <Typography variant="caption">July 14, 2021</Typography> */}
        </Box>
    );
}

Author.propTypes = {
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export function Search() {
    return (
        <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                placeholder="Search…"
                sx={{ flexGrow: 1 }}
                startAdornment={
                    <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                        <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />
        </FormControl>
    );
}

export default function Activities() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-green-900 md:text-5xl lg:text-6xl">
            Experience Nature's Thrill with Every Activity!
          </h1>
                <p className="mt-4 text-xl text-gray-600">
                At Vednandini Agri Food Court, we offer a range of exciting activities designed to immerse you in the beauty of nature and the charm of traditional village life. Whether you're splashing in the rain dance, scaling the heights of our tier climbing wall, or enjoying a tranquil tractor safari, each experience is crafted to bring joy, relaxation, and a connection to the natural world. Take a bullcart ride, enjoy a refreshing mud bath, or explore the serenity of our rock fountain—every activity here is a celebration of health, adventure, and the simplicity of rural living. Come join us and discover how fun meets nature in the most enriching way!
                </p>
            </div>
            <Box
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }}
            >
                <Search />
                <IconButton size="small" aria-label="RSS feed">
                    <RssFeedRoundedIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        flexDirection: 'row',
                        gap: 3,
                        overflow: 'auto',
                    }}
                >
                    <Chip onClick={handleClick} size="medium" label="All activities" />
                    <Chip
                        onClick={handleClick}
                        size="medium"
                        label="Water Park"
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    />
                    <Chip
                        onClick={handleClick}
                        size="medium"
                        label="Adventure"
                        sx={{
                            backgroundColor: 'transparent',
                            border: 'none',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'row',
                        gap: 1,
                        width: { xs: '100%', md: 'fit-content' },
                        overflow: 'auto',
                    }}
                >
                    <Search />
                    <IconButton size="small" aria-label="RSS feed">
                        <RssFeedRoundedIcon />
                    </IconButton>
                </Box>
            </Box>
            <Grid container spacing={2} columns={12}>
                {cardData.map((card, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(index)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === index ? 'Mui-focused' : ''}
                        >
                            <CardMedia component="img" image={card.img} height="120" alt={card.title} />
                            <SyledCardContent>
                               
                                <StyledTypography variant="h6">{card.title}</StyledTypography>
                                <StyledTypography variant="body2">{card.description}</StyledTypography>
                            </SyledCardContent>
                            {/* <Author authors={card.authors} /> */}
                        </SyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
