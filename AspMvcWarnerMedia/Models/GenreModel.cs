using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Newtonsoft.Json;

namespace AspMvcWarnerMedia.Models
{
    public class GenreModel
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

    }

    public class TitleGenreModel
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("titleId")]
        public int TitleId { get; set; }

        [JsonProperty("genreId")]
        public int GenreId { get; set; }
    }
}