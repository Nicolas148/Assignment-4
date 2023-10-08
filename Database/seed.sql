-- Insert sample records into the Users table
INSERT INTO Users (user_id, username, email, registration_date) VALUES
    (1, 'quake', 'quake@efrei.com', '2023-09-15 08:00:00'),
    (2, 'venary', 'venary@uci.com', '2023-09-16 09:00:00');

-- Insert sample records into the Games table
INSERT INTO Games (game_id, title, description, release_date, genre) VALUES
    (1, 'Overwatch', 'Fist person shooter', '2023-09-01', 'Action'),
    (2, 'Genshin', 'MMORPG', '2023-09-05', 'Adventure');

-- Insert sample records into the Reviews table
INSERT INTO Reviews (reviews_id, user_id, game_id, rating, review_text, review_date) VALUES
    (1, 1, 1, 5, 'Great game! Highly recommended.', '2023-09-10 12:00:00'),
    (2, 2, 2, 4, 'Fun adventure, but a bit short.', '2023-09-12 14:00:00');

-- Insert sample records into the Comments table
INSERT INTO Comments (comments_id, user_id, reviews_id, comment_text, comment_date) VALUES
    (1, 2, 1, 'I agree, it''s an excellent game!', '2023-09-11 13:00:00'),
    (2, 1, 2, 'I enjoyed playing this adventure game.', '2023-09-13 15:00:00');
