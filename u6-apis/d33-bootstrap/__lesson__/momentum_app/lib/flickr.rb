require 'json'
require 'rest-client'

module Flickr

  URL = "https://api.flickr.com/services/rest/"

  def self.fetch_random_image(tags)
    response = RestClient.get(URL, :params => {
      :api_key        => "a53be730bbc4d17b5c5646508d57dfe5",
      :tags           => tags.join("+"),
      :method         => "flickr.photos.search",
      :format         => "json",
      :nojsoncallback => 1
    })
    data = JSON.parse(response.body)
    if data["photos"]
      photo = data["photos"]["photo"][0]
      farm   = photo["farm"]
      server = photo["server"]
      id     = photo["id"]
      secret = photo["secret"]
      "https://farm#{farm}.staticflickr.com/#{server}/#{id}_#{secret}.jpg"
    else
      # if there's no photos give a default
      "https://farm9.staticflickr.com/8761/17346680314_90701c44f2.jpg"
    end
  end

end
