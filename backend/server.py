"""
This is the people module and supports all the ReST actions for the
PEOPLE collection
"""

# System modules
from datetime import datetime

# 3rd party modules
from flask import make_response, abort

import string
import random

def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))

SHORTTHIS = {
             "youtube.com" :{
             "input_url": "youtube.com",
             "output_url": "ytb.st",
             "timestamp": get_timestamp()
                },
            "google.com" :{
             "input_url": "google.com",
             "output_url": "ggle.st",
             "timestamp": get_timestamp()
                },
            "facebook.com" :{
             "input_url": "facebook.com",
             "output_url": "fb.st",
             "timestamp": get_timestamp()
                }
            }

OUTPUT_URL = [value["output_url"] for value in SHORTTHIS.values() ]

def get_outputurl():
    letters_dict = string.ascii_letters
    lettrers = ''.join(random.choice(letters_dict) for i in range(10))
    digits = ''.join(str(random.choice([*range(10)])) for i in range(4))
    output_url = lettrers + digits + ".st"
    if output_url in OUTPUT_URL:
        return get_outputurl()
    return output_url

def read_all():
    return [value for value in SHORTTHIS.values()]


def read_one(input_url):
    if input_url in SHORTTHIS.keys():
        return SHORTTHIS[input_url]
    else:
        abort(
            404, f"{input_url} has not been shortned yet"
        )


def create(input_url):
    if input_url not in SHORTTHIS.keys():
        output_url = get_outputurl()
        SHORTTHIS[input_url] = {"input_url" : input_url,
                                "ouput_url" : output_url,
                                "timestamp" : get_timestamp()
                                }
        OUTPUT_URL.append(output_url)
        return make_response(
                f"{input_url} has successfully been shortned", 201
            )
    else :
        return abort(
                f"{input_url} has alrady been shortned", 406
            )

def delete(delete_url):

    if delete_url in SHORTTHIS.keys():
        del SHORTTHIS[delete_url]
        return make_response(
            f"{delete_url} successfully deleted", 200
        )
    
    else:
        abort(
            404, f"{delete_url} has not been shorted yet"
        )