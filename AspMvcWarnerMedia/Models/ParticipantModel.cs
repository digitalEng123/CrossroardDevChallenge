using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Newtonsoft.Json;

namespace AspMvcWarnerMedia.Models
{
    public class ParticipantModel
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("participantType")]
        public string ParticipantType { get; set; }
    }

    public class TitleParticipantInfoModel
    {
        [JsonProperty("Id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("participantType")]
        public string ParticipantType { get; set; }

        [JsonProperty("isKey")]
        public bool IsKey { get; set; }

        [JsonProperty("roleType")]
        public string RoleType { get; set; }

        [JsonProperty("isOnScreen")]
        public bool IsOnScreen { get; set; }

        [JsonProperty("titleId")]
        public int TitleId { get; set; }

        [JsonProperty("participantId")]
        public int ParticipantId { get; set; }
    }
}