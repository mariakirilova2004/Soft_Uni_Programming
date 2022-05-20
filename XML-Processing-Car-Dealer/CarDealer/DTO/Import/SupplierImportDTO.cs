﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace CarDealer.DTO.Import
{
    [XmlType("Supplier")]
    public class SupplierImportDTO
    {
        [XmlElement("name")]
        public string Name { get; set; }

        [XmlElement("isImporter")]
        public bool isImporter { get; set; }
    }
}
