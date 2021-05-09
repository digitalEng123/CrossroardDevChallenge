using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Newtonsoft.Json;

namespace AspMvcWarnerMedia.Models
{
    public class OtherNameModel
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("titleNameLanguage")]
        public string TitleNameLanguage { get; set; }

        [JsonProperty("titleNameType")]
        public string TitleNameType { get; set; }

        [JsonProperty("titleNameSortable")]
        public string TitleNameSortable { get; set; }

        [JsonProperty("titleName")]
        public string TitleName { get; set; }

        [JsonProperty("titleId")]
        public int? TitleId { get; set; }

    }
}