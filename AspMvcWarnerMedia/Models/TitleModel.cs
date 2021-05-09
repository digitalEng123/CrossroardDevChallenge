using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Newtonsoft.Json;

namespace AspMvcWarnerMedia.Models
{
    public class TitleModel
    {
        [JsonProperty("titleId")]
        public int TitleId { get; set; }

        [JsonProperty("titleName")]
        public string TitleName { get; set; }

        [JsonProperty("titleNameSortable")]
        public string TitleNameSortable { get; set; }

        [JsonProperty("titleTypeId")]
        public int? TitleTypeId { get; set; }

        [JsonProperty("releaseYear")]
        public int? ReleaseYear { get; set; }

        [JsonProperty("processedDateTimeUTC")]
        public DateTime? ProcessedDateTimeUTC { get; set; }
    }
}