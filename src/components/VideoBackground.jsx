import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

//fetching the trailer video and updating the store
// eslint-disable-next-line react/prop-types
const VideoBackground = ({movieId}) => {
    useMovieTrailer(movieId);

    const trailerVideo = useSelector((store) => store?.movies?.trailerVideos);

    return (
        <div>
            <iframe
               className="w-screen aspect-video"
               
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; 
              autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
              web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoBackground;

// {
//     "id": 939243,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Sonic Characters Start as Puppets?! - Behind the Scenes Exclusive",
//         "key": "ouQyIgTPf08",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2025-01-29T17:43:18.000Z",
//         "id": "679c49403de588d5a0011be4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Shadow Escapes Prison - Extended Clip",
//         "key": "klJoTmOhivk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2025-01-21T23:07:49.000Z",
//         "id": "679065b03479c48ccb28a8a9"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Race to get your tickets for Sonic Movie 3 - now showing in cinemas.",
//         "key": "BL-u4_fLUj0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-16T01:00:14.000Z",
//         "id": "6788680379cf13ee41ad11e4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Team Sonic or Team Shadow?",
//         "key": "ildBz0JmncU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-15T01:00:37.000Z",
//         "id": "67882c2c9de8a2d834976746"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The adventure is about to begin",
//         "key": "AINucSxKmT4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-14T01:00:13.000Z",
//         "id": "6788330a79cf13ee41ad0691"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Let’s GOOOO!!!",
//         "key": "H7F8_8QfadY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-13T01:00:10.000Z",
//         "id": "6784aed14bfd7ef55dbb1aa9"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Ready, set, RACE!",
//         "key": "SVydLh-qS2w",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-10T01:00:19.000Z",
//         "id": "678498fcababbba040bb6d7c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Get your game faces on",
//         "key": "4faWGPRQ1zM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-09T01:00:05.000Z",
//         "id": "677f263fa6778aa5b37b1e64"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "SHOWTIME!",
//         "key": "YgwqvazWgg8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-08T01:00:21.000Z",
//         "id": "677f1b1f89fc5d94424e8483"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Speed + Strength + Gadgets!",
//         "key": "OBGqK-CfqaM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-06T06:02:39.000Z",
//         "id": "677cdbaec5070b8a4666bc41"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "BRING IT ON!!!",
//         "key": "PU6ELRodxFo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-04T01:00:24.000Z",
//         "id": "677b65742b097b15a274fa93"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "GAME ON!!!",
//         "key": "Y7Vrwppm90U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-03T01:00:25.000Z",
//         "id": "67786372321a3a166a74b025"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Get ready for #SonicMovie3 in 4DX",
//         "key": "VnhA6Rwv93I",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-01-02T01:00:28.000Z",
//         "id": "67771a0c816b2810d16679b3"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Fasten your seat belts!",
//         "key": "LtggdJT514c",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-29T01:00:18.000Z",
//         "id": "67724f55d8dc22e6c6927629"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "May the best hedgehog win",
//         "key": "FxZsebIJubE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-27T01:00:10.000Z",
//         "id": "676e3e970c4402b6319293c6"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "HAPPY HOLIDAYS!",
//         "key": "OiWf9CbenRk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-25T01:00:28.000Z",
//         "id": "676d09ea355bec07b0927ac9"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "City Run Projections",
//         "key": "p0DlRZlc9VU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-20T11:11:20.000Z",
//         "id": "6766b5d587b92a43be5e1fbc"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "No time for games",
//         "key": "qSD_odXs8Zs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-19T01:00:38.000Z",
//         "id": "6763d517a0cc3de6470015dd"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Shadow Vs Cyclops!? HILARIOUS Sonic Move 3 Interview | Ben Schwartz, James Marsden & More!",
//         "key": "7RFz9dJ4sAs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-18T20:05:00.000Z",
//         "id": "67636db6178bde9bac4a3b2b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Keanu on the Shadow Reveal Featurette",
//         "key": "KySK6POfmk8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-18T18:00:49.000Z",
//         "id": "6763cb210697b6c6c1aaf7c7"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Team Sonic vs. Team Shadow",
//         "key": "T3jEID5yE2g",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-17T01:00:18.000Z",
//         "id": "6760e2d6db7194c6f319278c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "A Very Sonic Christmas",
//         "key": "wmFwa4Q8lz8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-16T20:41:12.000Z",
//         "id": "6760e3011e6128648c19287c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Team Sonic Race\" Exclusive Clip",
//         "key": "Tg1dpLyYa3I",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-12-16T20:40:19.000Z",
//         "id": "6760e3081e6128648c192881"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Ivo Robotnik Timelapse",
//         "key": "JAnkpOgN3Lo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-12-13T17:01:18.000Z",
//         "id": "675cd31ba2a333736fd7f3e2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Gerald Robotnik Timelapse",
//         "key": "hf4_Lo4va_s",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-12-13T17:01:12.000Z",
//         "id": "675cd322a2a333736fd7f3e8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "A Very Sonic Christmas",
//         "key": "z2QIiOy6aw8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-11T16:00:19.000Z",
//         "id": "675a3279deb41dde9decc76b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Ugly Sonic Sweater Reveal",
//         "key": "j_vlQswhh5w",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-12-11T15:00:54.000Z",
//         "id": "675a329ddeb41dde9decc779"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Catch Sonic & the gang in action!",
//         "key": "6RCv7q3M5Mo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-12-11T01:00:04.000Z",
//         "id": "675a32a57e7cb94bdf1eb4a4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Exclusive Clip",
//         "key": "kI7RdKPpPFc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-12-10T21:10:54.000Z",
//         "id": "6758b02899359b0468a47505"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The speed, the stakes, the showdown",
//         "key": "qoLeG5Bcz_0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-12-09T01:00:36.000Z",
//         "id": "67565e68cf1801968f02e0d5"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Double Your Villains\" Featurette",
//         "key": "595kqDGsKXk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-12-08T00:00:04.000Z",
//         "id": "6754f512f1829b66fbb4db5e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"Casting a Shadow\" Featurette",
//         "key": "jtNo0jAWjn8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-11-26T17:28:59.000Z",
//         "id": "67460fdfdc98166f5cc037a4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer 2",
//         "key": "LH1J1EbqCaI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-11-25T14:00:03.000Z",
//         "id": "674488a3c24765fa2f2dea4d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Jim Carrey on Shadow",
//         "key": "jL7NA_LeH3U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-11-21T18:00:31.000Z",
//         "id": "673fb29cdae2e6a938254814"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "The Doctor Is Back",
//         "key": "pnAFeSoTMV8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-11-19T19:05:40.000Z",
//         "id": "673d0ab88fbc08961a23c2e6"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "qSu6i2iFMO0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2024-08-27T13:00:12.000Z",
//         "id": "66cdcf43babd422a1181aa1c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Projections From Around the World",
//         "key": "E0aZzP7r-R0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-08-27T03:18:56.000Z",
//         "id": "6774784a98f2f82fc492a83e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Title Treatment Reveal",
//         "key": "S5wdFSRYoOY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-02T14:15:28.000Z",
//         "id": "65bcffb02b8a4301471abe70"
//       }
//     ]
//   }
