from setuptools import setup
from setuptools import find_packages


setup(
    name='lsa-program',
    version='0.2.0',
    author='Oscar David Arbeláez <@odarbelaeze>, German Augusto Osorio',
    author_email='odarbelaeze@gmail.com',
    packages=find_packages(),
    install_requires=[
        'nltk>=3.1',
        'pymongo>=3.2',
        'numpy>=1.9.2',
        'scipy>=0.16.0',
        'marshmallow>=2.4.2',
        'click>=6.2',
        'bibtexparser>=0.6.2',
    ],
    tests_require=[
        'cov-core>=1.15.0',
        'coverage>=3.7.1',
        'py>=1.4.29',
        'pytest>=2.8.0',
        'pytest-cov>=1.8.1',
    ],
    setup_requires=[
        'pytest-runner>=2.7,<3dev',
    ],
    entry_points='''
    [console_scripts]
    lsapopulate=lsa.scripts.populate:lsapopulate
    lsamodel=lsa.scripts.model:lsamodel
    lsaquery=lsa.scripts.query:lsaquery
    ''',
    url='https://github.com/odarbelaeze/lsa-program',
    download_url='https://github.com/odarbelaeze/lsa-program/targall/0.2.0',
    keywords=['lsa', 'search', 'search engine', 'semantics', ],
    description='A latent semantic search engine implementation',
)