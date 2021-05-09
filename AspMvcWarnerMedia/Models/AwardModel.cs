using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Newtonsoft.Json;

namespace AspMvcWarnerMedia.Models
{
    public class AwardModel
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("awardWon")]
        public bool? AwardWon { get; set; }

        [JsonProperty("awardYear")]
        public int? AwardYear { get; set; }

        [JsonProperty("award")]
        public string Award { get; set; }

        [JsonProperty("awardCompany")]
        public string AwardCompany { get; set; }

        [JsonProperty("titleId")]
        public int TitleId { get; set; }

    }
}