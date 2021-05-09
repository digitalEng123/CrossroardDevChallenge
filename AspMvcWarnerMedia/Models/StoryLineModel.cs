using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Newtonsoft.Json;

namespace AspMvcWarnerMedia.Models
{
    public class StoryLineModel
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("language")]
        public string Language { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("titleId")]
        public int TitleId { get; set; }

    }
}