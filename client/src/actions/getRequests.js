import * as getResults from './getResults';

export const fetchMember = member => dispatch => {
    if (member.name === "paul ryan") {
        dispatch(getResults.memberReceived(
          { name: "paul ryan",
            party: "republican",
            district: "1st",
            state: "wisconsin",
            picture: "https://paulryan.house.gov/uploadedphotos/highresolution/3f3943d8-cea4-4f6b-96ac-3c25fd3ef24e.jpg",
            socialMedia: {
              facebook: {
                  link: "https://www.facebook.com/speakerryan/",
                  username: "/speakerryan"
              },
              instagram: {
                  link: "https://www.instagram.com/speakerryan/?hl=en",
                  username: "@speakerryan"
              },
              twitter: {
                  link: "https://twitter.com/SpeakerRyan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                  username: "@SpeakerRyan"
              }
            },
            bio: "https://en.wikipedia.org/wiki/Paul_Ryan"
          }
        ));
    } else if (member.name === "bernie sanders") {
        dispatch(getResults.memberReceived(
          { name: "bernie sanders",
            party: "democrat",
            district: null,
            state: "vermont",
            picture: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg",
            socialMedia: {
              facebook: {
                link: "https://www.facebook.com/berniesanders/",
                username: "/berniesanders"
              },
              twitter: {
                link: "https://twitter.com/BernieSanders",
                username: "@BernieSanders"
              },
              instagram: {
                link: "https://www.instagram.com/berniesanders/?hl=en",
                username: "@berniesanders"
              }
            },
            bio: "https://en.wikipedia.org/wiki/Paul_Ryan"
          }
        ));
      }
    }
