'''
This module contains utilities to normalize words and simplify them, it should
be able to remove punctuation, filter out stopwords and maybe transform some
latex accents into unicode accent characters.
'''

import bisect
import string

from nltk.corpus import stopwords
from nltk.stem.snowball import SnowballStemmer


STOPWORDS = sorted(stopwords.words())

STEMER = SnowballStemmer('spanish')

PUNCTUATION = str.maketrans(dict.fromkeys(string.punctuation))


class PunctuationRemover(object):

    characters = string.punctuation

    def __init__(self, characters=None):
        self.translation = str.maketrans(
            dict.fromkeys(characters or self.characters)
        )

    def apply_to(self, sentence):
        return sentence.translate(self.translation)


class SpaceTokenizer(object):

    def tokenize(self, sentence):
        return sentence.split()


class Stemmer(object):

    default_tokenizer = SpaceTokenizer

    def __init__(self, language='spanish', tokenizer=None):
        self.stemmer = SnowballStemmer(language)
        self.tokenizer = tokenizer or self.default_tokenizer()

    def apply_to(self, sentence):
        tokens = self.tokenizer.tokenize(sentence)
        return ' '.join(self.stemmer.stem(token) for token in tokens)


def is_stopword(word):
    '''
    Checks if a word is a stopword using the bisection method over a list of
    known stopwords stored in a global variable.
    '''
    # TODO A hash-map is more suitable for this
    # return word in STOPWORDS
    _word = word.lower()
    index = bisect.bisect_left(STOPWORDS, _word)
    return STOPWORDS[index] == _word


def normalize(word):
    '''
    Filters out the punctuation from a word and then applies a steemer, and
    yields the steemed word.
    '''
    # TODO This obviously may take a word normalizer class, to control the
    #      language and other normalization parameters
    _word = word.translate(PUNCTUATION)
    return STEMER.stem(_word)
