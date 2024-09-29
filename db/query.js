import pool from "./pool.js";

export default class CustomQuery {
    static createUser = async ({ firstName, lastName, username, password }) => {
        try {
            await pool.query(`
                INSERT INTO users
                (first_name, last_name, username, password)
                VALUES
                ($1, $2, $3, $4);
                `, [firstName, lastName, username, password]);
        } catch (error) {
            throw new Error(error);
        }
    }

    static getUserByUsername = async (username) => {
        const { rows } = await pool.query("SELECT * FROM users WHERE users.username = $1", [username]);
        const [user] = rows;
        return user;
    }

    static getUserById = async (id) => {
        const { rows } = await pool.query("SELECT * FROM users WHERE users.id = $1", [id]);
        const [user] = rows;
        return user;
    }
}