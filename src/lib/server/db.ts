import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const config = {
	user: process.env.POSTGRESQL_USER,
	password: process.env.POSTGRESQL_PASSWORD,
	host: process.env.POSTGRESQL_HOST,
	port: 19091,
	database: 'defaultdb',
	ssl: {
		rejectUnauthorized: true,
		ca: process.env.POSTGRESQL_SSL_CERTIFICATE
	}
};
export const pool = new Pool(config);

export const db = new Kysely<Database>({
	dialect: new PostgresDialect({
		pool
	})
});

interface Database {
	auth_user: UserTable;
	oauth_account: OauthAccountTable;
	user_session: SessionTable;
}

interface UserTable {
	id: string;
	username: string;
	email: string;
	avatar_url: string;
	hashed_password: string;
}

interface SessionTable {
	id: string;
	user_id: string;
	expires_at: Date;
}
interface OauthAccountTable {
	provider_id: string;
	provider_user_id: string;
	user_id: string;
}
