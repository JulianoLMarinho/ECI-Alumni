import os


# Database specific settings variables
DATABASE_POOL_SIZE = os.getenv('DATABASE_POOL_SIZE', 20)
DATABASE_POOL_OVERFLOW = os.getenv('DATABASE_POOL_OVERFLOW', 10)
DATABASE_POOL_RECYCLE = os.getenv('DATABASE_POOL_RECYCLE', 120)
SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI',
                                    "mysql://root:root@localhost:3306/eci_alumni")
