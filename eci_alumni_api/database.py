from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session
from sqlalchemy.orm import sessionmaker

from settings import DATABASE_POOL_OVERFLOW
from settings import DATABASE_POOL_RECYCLE
from settings import DATABASE_POOL_SIZE
from settings import SQLALCHEMY_DATABASE_URI


engine = create_engine(SQLALCHEMY_DATABASE_URI, convert_unicode=True,
                       pool_size=DATABASE_POOL_SIZE,
                       pool_recycle=DATABASE_POOL_RECYCLE,
                       max_overflow=DATABASE_POOL_OVERFLOW)

session_maker = sessionmaker(
    autocommit=False, autoflush=False, bind=engine
)

Base = declarative_base()
Session = scoped_session(session_maker)


def init_db():
    # import api.models
    Base.metadata.create_all(bind=engine)


def destroy_db():
    Base.metadata.drop_all(bind=engine)
