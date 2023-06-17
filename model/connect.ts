import {connect} from "@planetscale/database";

export const connectDb = async () => {
    const config = {
        host: 'aws.connect.psdb.cloud',
        username: '2ie1lutd0mazt7hgcq9r',
        password: 'pscale_pw_QRd0TSRr0wVUAxz5SFZasGi2ww0LFlJa5MAB6ypkD37'
    }
    const conn = await connect(config)
    return conn
}

