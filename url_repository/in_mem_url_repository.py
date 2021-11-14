from url_repository_interface import UrlRepositoryInterface

import sys
sys.path.append('../')
import utils

class InMemUrlRepository(UrlRepositoryInterface):
    def __init__(self):
        self.urlsRepo = {}
    
    def shorten(self, url: str) -> str:
        shortened_url = utils.get_random_string()
        self.urlsRepo[shortened_url] = url

        return shortened_url
        
    def get_url(self, shortened_url: str):
        if shortened_url not in self.urlsRepo.keys():
            raise Exception('This shortened url does not exist')

        return self.urlsRepo[shortened_url]


        