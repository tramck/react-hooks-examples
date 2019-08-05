export default (query) => {
    return new Promise((resolve, reject) => {
        let result = {};

        switch (query) {
            case '1':
                result.payload = [{
                    'advertiser_id': 1,
                    'advertiser_name': 'Foo'
                }];
                break;

            case '2':
                result.payload = [{
                    'advertiser_id': 2,
                    'advertiser_name': 'Bar'
                }];
                break;

            default:
                result.errors = ['Advertiser not found'];
                break;
        }

        setTimeout(() => {
            resolve(result);
        }, 300);
    });
};