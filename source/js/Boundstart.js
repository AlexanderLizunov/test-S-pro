/**
 * Created by BogdanKootz on 22.02.17.
 */

//TODO::check the second entrance because of cheating
var BS = {
    vkLikePoints:       1,
    vkSharePoints:      3,
    vkSubscribePoints:  50,
    fbLikePoints:       1,
    fbSharePoints:      3,
    instaLikePoints:    1,
    locale:             'ru',

    apiUrl: "https://api.boundstart.com/points-api/v1.0.0",
    Tracker : {
        points: 0,
        reason: '',
        action: 'add',
        id: 0,
        eventsRus: {
            'VKShare':          'Поделился ВК',
            'VKLike':           'Лайкнул ВК',
            'VKUnlike':         'Дизлайкнул ВК',
            'VKSubscribe':      'Подписался ВК',
            'VKUnsubscribe':    'Отписался ВК',
            'FBLike':           'Подписался в Фейсбук',
            'FBUnlike':         'Отписался в Фейсбук',
            'FBShare':          'Поделился в Фейсбук',
            'InstaLike':        'Подписался в инстаграм'
        },
        eventsEng: {
            'VKShare':          'Like in VK',
            'VKLike':           'Dislike in VK',
            'VKUnlike':         'Share in VK',
            'VKSubscribe':      'Subscribe VK',
            'VKUnsubscribe':    'Unsubscribe VK',
            'FBLike':           'Like on Facebook',
            'FBUnlike':         'Dislike on Facebook',
            'FBShare':          'Share on Facebook',
            'InstaLike':        'Subscribe on Instagram'
        },
        event: '',

        track: function() {
            BS.Tracker.defineEvent();
            BS.Tracker.defineReason();
            BS.Tracker.definePoints();
            BS.Tracker.defineAction();
            console.log('reason ' + BS.Tracker.reason);
            console.log('action ' + BS.Tracker.action);
            console.log('points ' + BS.Tracker.points);
            console.log('id    ' + BS.Tracker.id);
            BS.Tracker.send(BS.Tracker.id);
        },

        defineEvent: function () {
            if (BS.locale === 'ru') {
                $events = BS.Tracker.eventsRus;
            } else {
                $events = BS.Tracker.eventsEng;
            }

            BS.Tracker.event = $events[BS.Tracker.reason]

        },

        defineReason: function () {
            if (BS.Tracker.reason === '') {
                console.log('Reason is not defined!');
                throw new Error("Something went badly wrong!");
            }
        },

        defineAction: function () {
            if (inArray(BS.Tracker.reason, ['VKUnlike', 'VKUnsubscribe', 'FBUnlike'])) {

                this.action = 'subtract';
            } else {
                this.action = 'add';
            }
        },

        definePoints: function () {
            switch(BS.Tracker.reason) {
                case 'VKLike':
                case 'VKUnlike':
                    BS.Tracker.points = BS.vkLikePoints;
                    break;
                case 'VKShare':
                    BS.Tracker.points = BS.vkSharePoints;
                    break;
                case 'VKSubscribe':
                case 'VKUnsubscribe':
                    BS.Tracker.points = BS.vkSubscribePoints;
                    break;
                case 'FBLike':
                case 'FBUnlike':
                    BS.Tracker.points = BS.fbLikePoints;
                    break;
                case 'FBShare':
                    BS.Tracker.points = BS.fbSharePoints;
                    break;
                case 'InstaLike':
                    BS.Tracker.points = BS.instaLikePoints;
                    break;
            }
        },
        //TODO:: get user ID from Mautic request and pass it here
        getUserId: function (email) {
            $.ajax({
                type: 'POST',
                url: BS.apiUrl+'/get-user-id.php',
                data: {action: 'getId', email: email},
                success: function(data) {
                    // console.log(data);
                    BS.Tracker.id = data;
                }
            });
        },

        send: function($id) {
            $.ajax({
                type: "GET",
                dataType: "jsonp",
                processData: false,
                crossDomain: true,
                jsonpCallback: 'photos',
                jsonp: false,
                url: BS.apiUrl+"?id="+$id+"&points="+BS.Tracker.points+"&action="+BS.Tracker.action+"&event="+BS.Tracker.event,
            });
        }
    }
};

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}
