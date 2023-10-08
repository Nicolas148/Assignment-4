-- Create the Users table
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the Games table
CREATE TABLE Games (
    game_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_date DATE,
    genre VARCHAR(255)
);

-- Create the Reviews table
CREATE TABLE Reviews (
    reviews_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    game_id INT REFERENCES Games(game_id),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the Comments table
CREATE TABLE Comments (
    comments_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    reviews_id INT REFERENCES Reviews(reviews_id),
    comment_text TEXT,
    comment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
