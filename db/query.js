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
}