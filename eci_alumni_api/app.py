from os import getenv
from flask import Flask

from database import Session

from v1.api import blueprint as api_v1


def create_app():

    app = Flask(__name__)
    app.config['LOGGER_NAME'] = 'api'
    app.config['BUNDLE_ERRORS'] = True
    app.config.from_object('settings')
    app.register_blueprint(api_v1)

    @app.before_request
    def create_session():
        Session()

    @app.teardown_appcontext
    def shutdown_session(exception=None):
        Session.remove()
        if exception and Session.is_active:
            Session.rollback()

    return app


if __name__ == '__main__':
    app = create_app()
    app.run('0.0.0.0', int(getenv('PORT', '5000')), debug=True)
