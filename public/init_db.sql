CREATE TABLE `users` (   
  `id` int(11) NOT NULL AUTO_INCREMENT,   
  `user_name` varchar(60) NOT NULL,   
  `password` varchar(100) NOT NULL,   
  `user_type` int(2) NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;


CREATE TABLE `news` (   
  `id` int(11) NOT NULL AUTO_INCREMENT,   
  `title` varchar(60) NOT NULL,   
  `cover_img` varchar(100) NOT NULL,   
  `link` varchar(100) NOT NULL,   
  `type` int(2) NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- news -> type
  -- 1 互联网
  -- 2 笑料
  -- 3 管理
  -- 4 散文