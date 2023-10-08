-- Query 1: Retrieve the usernames of users who have left reviews with a rating of 5 stars.
SELECT DISTINCT username
FROM Users 
JOIN Reviews USING(user_id)
WHERE Reviews.rating = 5;

-- Query 2: Retrieve usernames of users who have left reviews for games.
SELECT DISTINCT username
FROM Users 
JOIN Reviews USING(user_id);

-- Query 3: Retrieve the review text and usernames of users who left reviews for 'Game 2'.
SELECT review_text, username
FROM Reviews
JOIN Users USING(user_id)
WHERE Reviews.game_id = 2;

-- Query 4: Retrieve the comments made by user 2 on reviews with a rating of 4 or higher.
SELECT comment_text
FROM Comments
JOIN Reviews USING(reviews_id)
WHERE Comments.user_id = 2 AND Reviews.rating >= 4;

