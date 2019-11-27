from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash

from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy.exc import IntegrityError

from flask import current_app as app

from eci_alumni_api.database import Base
from eci_alumni_api.database import Session


class User(Base):

    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(64))
    name = Column(String(64), nullable=False)
    email = Column(String(64), nullable=False)
    password_hash = Column(String(128))
    profile_picture = Column(String(128))
    professional_summary = Column(String())
    graduation_date = Column(DateTime)
    date_created = Column(DateTime, nullable=False, default=datetime.utcnow)
    date_updated = Column(DateTime, nullable=False, default=datetime.utcnow)

    @property
    def password(self):
        raise AttributeError("Password is protected")

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def save(self):
        try:
            session = Session()
            session.add(self)
            session.commit()

            return self
        except IntegrityError as err:
            raise
        except Exception as err:
            app.logger.exception(err)

    def delete(self):
        try:
            session = Session()
            session.delete(self)
            session.commit()
            return True
        except Exception as err:
            return False
            # TODO: Solve a problem with app context when running tests
            # app.logger.info("test")
